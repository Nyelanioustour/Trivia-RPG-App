import React from 'react'
import { Button, Modal, Image } from 'semantic-ui-react'

function AnswerModel(props) {
    const [open, setOpen] = React.useState(false)
    let damage = props.correct_answer !== props.answer
    let parry = true
    let image = '/images/damage.png'
    let header = "Wrong!"
    let message = "You took damage! If you have parry available you may select parry to prevent damage."
    if(!damage){
        header = "Correct"
        message = "You dodged the blow! Now counter attack!"
        image = '/images/dodge.png'
    }
    
  return (
    <Modal
      onClose={() => {
          setOpen(false)
          
        }}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<button className="ui black basic button">{props.answer.replace(/&#039;/g,"'").replace(/&quot;/g,"'").replace(/&amp;/," & ")}</button>}
      >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content image>
        <Image size='small' src={image} wrapped />
        <Modal.Description>
          <h1>
            {message}
          </h1>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
          {parry ?
        <Button 
        color='green' 
        onClick={() => {
            setOpen(false)
            props.getQuestion()
            }}>
        Parry!        
        </Button>
        :null
          }
        <Button
          content="Counter Attack!"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {
              setOpen(false)
              props.getQuestion()
              if(damage){
                props.setWrongAnswers()
              }
          }}
          positive="true"
        />
      </Modal.Actions>
    </Modal>
  )

}

export default AnswerModel