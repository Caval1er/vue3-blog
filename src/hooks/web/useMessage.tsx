import { Modal, message as Message } from 'ant-design-vue'
import type { ModalFunc, ModalFuncProps } from 'ant-design-vue/lib/modal/Modal'
import merge from 'deepmerge'
import { isString } from 'lodash-es'
import {
  InfoCircleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
} from '@ant-design/icons-vue'
export interface ModalOptionsEx extends Omit<ModalFuncProps, 'iconType'> {
  iconType: 'warning' | 'success' | 'error' | 'info'
}
export type ModalOptionsPartial = Partial<ModalOptionsEx> &
  Pick<ModalOptionsEx, 'content'>
function getIcon(iconType: string) {
  if (iconType === 'warning') {
    return <InfoCircleFilled class="modal-icon-warning" />
  } else if (iconType === 'success') {
    return <CheckCircleFilled class="modal-icon-success" />
  } else if (iconType === 'info') {
    return <InfoCircleFilled class="modal-icon-info" />
  } else {
    return <CloseCircleFilled class="modal-icon-error" />
  }
}
function renderContent({ content }: Pick<ModalOptionsEx, 'content'>) {
  if (isString(content)) {
    return <div innerHTML={`<div>${content as string}</div>`}></div>
  } else {
    return content
  }
}
function createModalOptions(
  options: ModalOptionsPartial,
  icon: string
): ModalOptionsPartial {
  const content = renderContent(options)
  const iconHtml = getIcon(icon)
  return merge({ okText: '确认', centered: true, content, iconHtml }, options)
}
function createErrorModal(options: ModalOptionsPartial) {
  return Modal.error(createModalOptions(options, 'close'))
}
export function useMessage() {
  return {
    createMessage: Message,
    createErrorModal,
  }
}
