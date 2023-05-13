"use server"
const { Storage } = require('@google-cloud/storage');

const storage = new Storage();

const bucketName = 'framingwebsite';

interface myFile {
  name: string; 
}

async function listFiles() {
  const [files] = await storage.bucket(bucketName).getFiles();
  console.log("files: ")

  files.forEach((file: myFile) => {
  console.log(file.name);
  })

}

listFiles().catch(console.error)
export default listFiles;
