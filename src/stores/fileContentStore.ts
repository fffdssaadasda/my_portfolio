import { create } from "zustand";

interface FileContentStore {
  setFileContent: (content: string) => void;
  setFileName: (content: string) => void;
  content: string;
  fileName: string;
}

const FilesContentStore = create<FileContentStore>((set, get) => ({
  content: "",
  setFileContent(content) {
    set({ content });
  },
  setFileName(content) {
    set({ fileName: content });
  },
  fileName: "",
}));

export default FilesContentStore;
