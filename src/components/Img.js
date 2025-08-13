import React, { useState } from 'react'
import Display from './Display';

export default function Img({ onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    if (onFileSelect) {
      onFileSelect(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading:', selectedFile);
    } else {
      alert('Please select a file first.');
    }
  };

  // For demonstration, processed image is same as preview
  const processedImageUrl = selectedFile ? URL.createObjectURL(selectedFile) : null;

  return (
<div className="container">
  <div className="row">

    {/* Column 1: Upload */}
    <div className="col-md-4 text-center">
      <h2 className="text-primary">Upload Image</h2>
      <div className="well">
        <img
          src="http://100dayscss.com/codepen/upload.svg"
          alt="Upload Icon"
          className="img-responsive center-block"
          style={{ maxWidth: '100px', marginBottom: '15px' }}
        />
        <input
          type="file"
          className="form-control"
          onChange={handleFileChange}
        />
        <button
          type="button"
          className="btn btn-primary btn-block"
          style={{ marginTop: '10px' }}
          onClick={handleUpload}
        >
          Upload File
        </button>
      </div>
    </div>

    {/* Column 2: Preview */}
    <div className="col-md-4 text-center">
      <h2 className="text-success">Preview</h2>
      <div className="well">
        {selectedFile ? (
          <Display imageUrl={URL.createObjectURL(selectedFile)} />
        ) : (
          <p className="text-muted">No image selected</p>
        )}
      </div>
    </div>

    {/* Column 3: Processed Image */}
    <div className="col-md-4 text-center">
      <h2 className="text-info">Processed Image</h2>
      <div className="well">
        {processedImageUrl ? (
          <Display imageUrl={processedImageUrl} />
        ) : (
          <p className="text-muted">No processed image available</p>
        )}
      </div>
    </div>

  </div>
</div>

  )
}
