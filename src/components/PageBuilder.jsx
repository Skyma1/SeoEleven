/**
 * Визуальный конструктор страниц на основе GrapesJS
 * Позволяет создавать страницы с помощью drag-and-drop блоков
 */

import React, { useEffect, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-blocks-basic';
import 'grapesjs-preset-webpage';
import styles from '../styles/PageBuilder.module.css';

const PageBuilder = ({ value, onChange, onSave }) => {
  const editorRef = useRef(null);
  const containerRef = useRef(null);
  const [editor, setEditor] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Инициализация GrapesJS редактора
    const editorInstance = grapesjs.init({
      container: containerRef.current,
      height: '600px',
      width: '100%',
      fromElement: false,
      noticeOnUnload: false,
      storageManager: false, // Отключаем storage manager полностью
      plugins: ['gjs-blocks-basic', 'gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          modalImportTitle: 'Импорт шаблона',
          modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Вставьте HTML код:</div>',
          modalImportContent: function(editor) {
            return editor.getHtml() + '<style>' + editor.getCss() + '</style>';
          },
          filestackOpts: null,
        },
      },
      canvas: {
        styles: [
          'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        ],
      },
      deviceManager: {
        devices: [
          {
            name: 'Desktop',
            width: '',
          },
          {
            name: 'Tablet',
            width: '768px',
            widthMedia: '992px',
          },
          {
            name: 'Mobile',
            width: '320px',
            widthMedia: '768px',
          },
        ],
      },
      panels: {
        defaults: [
          {
            id: 'layers',
            el: '.panel__right',
            resizable: {
              maxDim: 350,
              minDim: 200,
              tc: 0,
              cl: 1,
              cr: 0,
              bc: 0,
              keyWidth: 'flex-basis',
            },
          },
          {
            id: 'panel-devices',
            el: '.panel__devices',
            buttons: [
              {
                id: 'device-desktop',
                label: '🖥️',
                command: 'set-device-desktop',
                active: true,
                togglable: false,
              },
              {
                id: 'device-tablet',
                label: '📱',
                command: 'set-device-tablet',
                active: false,
                togglable: false,
              },
              {
                id: 'device-mobile',
                label: '📱',
                command: 'set-device-mobile',
                active: false,
                togglable: false,
              },
            ],
          },
        ],
      },
      blockManager: {
        appendTo: '.blocks-container',
      },
      layerManager: {
        appendTo: '.layers-container',
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Размер',
            open: false,
            buildProps: ['width', 'min-height', 'padding'],
            properties: [
              {
                type: 'integer',
                name: 'Ширина',
                property: 'width',
                units: ['px', '%'],
                defaults: 'auto',
                min: 0,
              },
            ],
          },
          {
            name: 'Типографика',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align'],
            properties: [
              {
                name: 'Шрифт',
                property: 'font-family',
                type: 'select',
                defaults: 'Inter',
                options: [
                  { value: 'Inter', name: 'Inter' },
                  { value: 'Arial', name: 'Arial' },
                  { value: 'Helvetica', name: 'Helvetica' },
                  { value: 'Georgia', name: 'Georgia' },
                  { value: 'Times New Roman', name: 'Times New Roman' },
                ],
              },
            ],
          },
          {
            name: 'Отступы',
            open: false,
            buildProps: ['margin', 'padding'],
            properties: [
              {
                type: 'integer',
                name: 'Верх',
                property: 'margin-top',
                units: ['px', 'em', '%'],
                defaults: 0,
              },
              {
                type: 'integer',
                name: 'Право',
                property: 'margin-right',
                units: ['px', 'em', '%'],
                defaults: 0,
              },
              {
                type: 'integer',
                name: 'Низ',
                property: 'margin-bottom',
                units: ['px', 'em', '%'],
                defaults: 0,
              },
              {
                type: 'integer',
                name: 'Лево',
                property: 'margin-left',
                units: ['px', 'em', '%'],
                defaults: 0,
              },
            ],
          },
          {
            name: 'Декорации',
            open: false,
            buildProps: ['opacity', 'border-radius', 'border', 'box-shadow', 'background'],
          },
          {
            name: 'Гибкая сетка',
            open: false,
            buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self'],
          },
        ],
      },
    });

    // Загружаем существующий контент если есть
    if (value) {
      try {
        const data = typeof value === 'string' ? JSON.parse(value) : value;
        if (data.html && data.css) {
          editorInstance.setComponents(data.html);
          editorInstance.setStyle(data.css);
        } else if (data.html) {
          editorInstance.setComponents(data.html);
        }
      } catch (e) {
        console.warn('Failed to load page content:', e);
        // Если это просто HTML строка, загружаем как есть
        if (typeof value === 'string' && value.trim().startsWith('<')) {
          editorInstance.setComponents(value);
        }
      }
    }

    // Слушаем изменения с небольшой задержкой для избежания ошибок
    let updateTimeout;
    editorInstance.on('update', () => {
      clearTimeout(updateTimeout);
      updateTimeout = setTimeout(() => {
        try {
          const html = editorInstance.getHtml();
          const css = editorInstance.getCss();
          const data = {
            html,
            css,
            components: editorInstance.getComponents().toJSON(),
            styles: editorInstance.getStyle().toJSON(),
          };
          onChange(JSON.stringify(data));
        } catch (error) {
          console.error('Error in update handler:', error);
        }
      }, 100);
    });

    setEditor(editorInstance);
    setIsReady(true);
    editorRef.current = editorInstance;

    return () => {
      if (updateTimeout) {
        clearTimeout(updateTimeout);
      }
      if (editorInstance) {
        try {
          editorInstance.destroy();
        } catch (error) {
          console.error('Error destroying editor:', error);
        }
      }
    };
  }, []);

  // Обновляем контент при изменении value извне
  useEffect(() => {
    if (!editor || !value || !isReady) return;

    try {
      const data = typeof value === 'string' ? JSON.parse(value) : value;
      if (data.html && data.css) {
        editor.setComponents(data.html);
        editor.setStyle(data.css);
      }
    } catch (e) {
      // Игнорируем ошибки парсинга
    }
  }, [value, editor, isReady]);

  return (
    <div className={styles.pageBuilder}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <div className={styles.panelDevices}>
            <div className="panel__devices"></div>
          </div>
        </div>
        <div className={styles.toolbarRight}>
          {onSave && (
            <button
              type="button"
              onClick={() => {
                if (editor) {
                  const html = editor.getHtml();
                  const css = editor.getCss();
                  onSave({ html, css });
                }
              }}
              className={styles.saveButton}
            >
              💾 Сохранить
            </button>
          )}
        </div>
      </div>
      
      <div className={styles.editorContainer}>
        <div className={styles.sidebarLeft}>
          <div className={styles.blocksContainer}>
            <h3 className={styles.sidebarTitle}>Блоки</h3>
            <div className="blocks-container"></div>
          </div>
        </div>

        <div className={styles.canvasContainer}>
          <div ref={containerRef} className={styles.canvas}></div>
        </div>

        <div className={styles.sidebarRight}>
          <div className="panel__right">
            <div className={styles.layersContainer}>
              <h3 className={styles.sidebarTitle}>Слои</h3>
              <div className="layers-container"></div>
            </div>
            <div className={styles.stylesContainer}>
              <h3 className={styles.sidebarTitle}>Стили</h3>
              <div className="styles-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBuilder;

