import { LocalFilePath, File } from './model';

export interface FileUpload {
    upload: (files: File[]) => Promise<LocalFilePath[]>;
}