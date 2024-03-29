import { HIDE_REQUESTFORM_MODAL, SET_MOBILE_MENU, SET_MODAL_FORM, SET_MODAL_THANKS, SET_MODAL_WINDOW, SHOW_REQUESTFORM_MODAL } from "../constants/ActionTypes";

interface showRequestModal {
  type: typeof SHOW_REQUESTFORM_MODAL
}

interface hideRequestModal {
  type: typeof HIDE_REQUESTFORM_MODAL
}

interface setMobileMenu {
  type: typeof SET_MOBILE_MENU,
  isActive: boolean
}

interface setModalWindow {
  type: typeof SET_MODAL_WINDOW,
  isActive: boolean
}

interface setModalForm {
  type: typeof SET_MODAL_FORM,
  isActive: boolean
}

interface setModalThanks {
  type: typeof SET_MODAL_THANKS,
  isActive: boolean
}

export type ModalActionType = 
  | showRequestModal
  | hideRequestModal
  | setMobileMenu
  | setModalWindow
  | setModalForm
  | setModalThanks