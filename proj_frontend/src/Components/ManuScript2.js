import { useState } from 'react'
import FileUpload from './FileUpload';
import FileList from './FileList';

const ManuScript2 = () => {
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  return (
    <div className="App" style={{ marginTop: '30px',
    fontFamily: 'sans-serif',
    color:' #343a4a',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '60vh',
    padding: '80px',
}}>
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
      
    </div>
  );
}

export default ManuScript2;