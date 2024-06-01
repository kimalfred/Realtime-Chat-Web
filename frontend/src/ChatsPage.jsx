import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = ( props) =>{
    const chatProps = useMultiChatLogic(
        '0ca4e3fd-1382-49bc-8b6e-9b424781c69c', 
        props.user.username, 
        props.user.secret
    );
    return(
    <div styles={{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{ height: '100%'}}/>
    </div>
    )
}

export default ChatsPage