import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Document {
    id: number;
    name: string;
    size: string;
    docFile: string;
    own: string;
    status: string;
    date: string;
}

interface DocumentSchema {
    data: Document[];
}

const initialState: DocumentSchema = {
    data: [],
};

export const documentSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Document[]>) => {
            state.data = action.payload;
        },
        updateStatus: (state, action: PayloadAction<{ id: Number; status: string }>) => {
            state.data = state.data.map((doc) => {
                if (doc.id === action.payload.id) {
                    doc.status = action.payload.status;
                }
                return doc;
            });
        },
        delete: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter((document) => document.id !== action.payload);
        },
    },
});

export const { actions: documentActions, reducer: documentReducer } = documentSlice;
