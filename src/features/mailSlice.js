import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        selectedMail: null,
        sendMessageIsOpen: false,
    },
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        mailData: (state, action) => {
            state.selectedMail = action.payload
        },

        openSendMessage: (state) => {
            state.sendMessageIsOpen = true
        },
        closeSendMessage: (state) => {
            state.sendMessageIsOpen = false
        }
    }
});

export const { openSendMessage, closeSendMessage, mailData } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const selectMail = (state) => state.mail.selectedMail;



export default mailSlice.reducer;
