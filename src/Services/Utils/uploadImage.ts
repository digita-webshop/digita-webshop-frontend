export async function uploadImage(file: any) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "digita");
  const response = await fetch(
    " https://api.cloudinary.com/v1_1/dmgb7kvmn/image/upload",
    {
      method: "POST",
      body: formData,
    }
  ).then((res) => res.json());
  return response;
}
