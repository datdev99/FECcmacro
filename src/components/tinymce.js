// components/tinymce.js
import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMCE({ value, onChange }) {
  return (
    <Editor
    apiKey="DatNguyen"
        value={value}
        onEditorChange={onChange}
        init={{
        height: 500,
        menubar: true, // Hiển thị thanh menu
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | removeformat | help | image",
        image_caption: true, // Cho phép thêm tiêu đề cho hình ảnh
        image_title: true,   // Cho phép thêm tiêu đề cho hình ảnh
        automatic_uploads: true, // Cho phép tải hình ảnh tự động
        file_picker_types: "image", // Chỉ chấp nhận các loại file là hình ảnh
        file_picker_callback: function (cb, value, meta) {
          var input = document.createElement("input");
          input.setAttribute("type", "file");
          input.setAttribute("accept", "image/*");

          // Chờ cho người dùng chọn file
          input.onchange = function () {
            var file = input.files[0];
            var reader = new FileReader();

            reader.onload = function () {
              // Gửi hình ảnh lên server và nhận về đường dẫn
              var xhr = new XMLHttpRequest();
              xhr.open("POST", "/upload-endpoint", true);
              xhr.onload = function () {
                if (xhr.status === 200) {
                  var response = JSON.parse(xhr.responseText);
                  cb(response.location, { title: file.name });
                }
              };
              var formData = new FormData();
              formData.append("file", file);
              xhr.send(formData);
            };

            reader.readAsDataURL(file);
          };

          // Mở cửa sổ chọn file khi nút được nhấn
          input.click();
        },
      }}
    />
  );
}
