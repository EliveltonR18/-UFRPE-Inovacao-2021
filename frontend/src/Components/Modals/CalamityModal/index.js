// Global
import React from 'react'
import ClayButton from '@clayui/button'
import ClayModal, { useModal } from '@clayui/modal'
import { useSelector, useDispatch } from 'react-redux'
// Redux
import { show } from '../../../redux/actions/calamityModal.action'
// Stylesheet
import './index.scss'

const { Footer, Header, Body } = ClayModal

const CalamityModal = () => {
  const { isOpened } = useSelector((state) => state.calamityModal)
  const dispatch = useDispatch()
  const open = (showParam) => dispatch(show(showParam))
  const { observer, onClose } = useModal({
    onClose: () => open(false),
  })

  return (
    <div className='calamity-modal'>
      {isOpened && (
        <ClayModal observer={observer} size='lg' status='info'>
          <Header>Adicionar Calamidade</Header>
          <Body>
            <h1>Add Fields</h1>
          </Body>
          <Footer
            first={
              <ClayButton onClick={onClose} displayType='secondary'>
                Cancelar
              </ClayButton>
            }
            last={<ClayButton onClick={onClose}>Adicionar</ClayButton>} // change to add function
          />
        </ClayModal>
      )}
      <ClayButton displayType='primary' onClick={() => open(true)}>
        Denunciar
      </ClayButton>
    </div>
  )
}

export default CalamityModal
