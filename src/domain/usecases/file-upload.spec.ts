import { FileUpload } from "./file-upload"
import { File, LocalFilePath } from "./model"

interface SutTypes{
    sut: FileUpload
    files: File[]
    localFilePath: LocalFilePath[]
}

const makeSut = (): SutTypes => {
    const localFilePath: LocalFilePath[] = [
        {
            name: 'valid_name', 
            path: 'valid_path'
        }
    ]
    class FileUploadStub implements FileUpload{
        upload(files: File[]): Promise<LocalFilePath[]> {
            return Promise.resolve(localFilePath)
        }            
    }
    
    const files: File[] = [
        {
            name: "file1.png",
            size: 15,
            type: "image/jpeg",
            extension: "jpg",
            content: new ArrayBuffer(0)
        },
    ]

    const sut = new FileUploadStub()
    return { sut, files, localFilePath }
}

describe('FileUpload test', () => {
    test('should return valid LocalFilePath list', async () => {
        const { sut, files, localFilePath } = makeSut()
        const returnMock = await sut.upload(files)
        expect(returnMock).toEqual(localFilePath)        
    })    
})
