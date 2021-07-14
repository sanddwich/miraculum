import { HIDE_REQUESTFORM_MODAL, SET_MOBILE_MENU, SET_MODAL_FORM, SET_MODAL_THANKS, SET_MODAL_WINDOW, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes"

export const showRequestModal = () => ({
  type: SHOW_REQUESTFORM_MODAL
})

export const hideRequestModal = () => ({
  type: HIDE_REQUESTFORM_MODAL
})

export const setMobileMenu = (isActive: boolean) => ({
  type: SET_MOBILE_MENU,
  isActive,
})

export const setModalWindow = (isActive: boolean) => ({
  type: SET_MODAL_WINDOW,
  isActive,
})

export const setModalForm = (isActive: boolean) => ({
  type: SET_MODAL_FORM,
  isActive,
})

export const setModalThanks = (isActive: boolean) => ({
  type: SET_MODAL_THANKS,
  isActive,
})