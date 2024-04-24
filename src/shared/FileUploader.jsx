import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const [fileUrl , setFileUrl] = useState("");
  
  const handleUpload = (acceptedFile) => {
    console.log(acceptedFile);
  }

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} />
      {fileUrl ? (
        <>
        <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
         <img src={fileUrl} alt="image" className="file_uploader-img"/>
        </div>
        <p className="file_uploader-labbel">
          Click or drag photo to replace
        </p>
        </>
      ) : (
        <div className="file_uploader-box">
          <img
            src="/asset/file-upload.svg"
            alt="file-upload"
            width={96}
            height={77}
          />
          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag photo here
          </h3>
          <p className="text-light-4 small-regular mb-6">PNG or JPG</p>
          <button
            type="submit"
            class=" text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
          >
            Select from computer
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
