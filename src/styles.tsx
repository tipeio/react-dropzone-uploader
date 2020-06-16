import React from 'react'

export const renderCSS = () => (
  //@ts-ignore
  <style jsx="" global="">
    {`
      .dzu-dropzone {
        width: 100%;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
        transition: all 0.15s linear;
        border: 2px solid transparent;
      }

      .dzu-dropzoneActive {
        border: 2px solid #121212;
      }

      .dzu-dropzoneDisabled {
        opacity: 0.5;
      }

      .dzu-dropzoneDisabled *:hover {
        cursor: unset;
      }

      .dzu-input {
        display: none;
      }

      .dzu-inputLabel {
        position: relative;
        font-size: 20px;
        font-weight: 600;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        cursor: pointer;
      }

      .dzu-inputLabelWithFiles {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        padding: 0 14px;
        min-height: 32px;
        background-color: #e6e6e6;
        border: none;
        font-family: 'Helvetica', sans-serif;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        margin-top: 20px;
        margin-left: 3%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        cursor: pointer;
      }

      .dzu-previewContainer {
        padding: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        min-height: 60px;
        z-index: 1;
        box-sizing: border-box;
        background-color: #efefef;
      }

      .dzu-previewStatusContainer {
        display: flex;
        align-items: center;
      }

      .dzu-previewFileName {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
      }

      .dzu-previewImage {
        width: auto;
        max-height: 50px;
        max-width: 150px;
        border-radius: 4px;
        background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
          linear-gradient(135deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%),
          linear-gradient(135deg, transparent 75%, #ccc 75%);
        background-size: 6px 6px;
        background-position: 0 0, 3px 0, 3px -3px, 0px 3px;
      }

      .dzu-previewButton {
        background-size: 14px 14px;
        background-position: center;
        background-repeat: no-repeat;
        width: 14px;
        height: 14px;
        cursor: pointer;
        opacity: 0.9;
        margin: 0 0 2px 10px;
      }

      .dzu-submitButtonContainer {
        margin: 24px 0;
        z-index: 1;
      }

      .dzu-submitButton {
        padding: 0 14px;
        min-height: 32px;
        background-color: #2484ff;
        border: none;
        border-radius: 4px;
        font-family: 'Helvetica', sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        cursor: pointer;
      }

      .dzu-submitButton:disabled {
        background-color: #e6e6e6;
        color: #333333;
        cursor: unset;
      }
    `}
  </style>
)
