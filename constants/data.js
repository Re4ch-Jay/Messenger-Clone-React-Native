
import assets from './assets'

const chatData = [
    {
        id: '1',
        name: 'Jack Marston',
        message: 'Hello John',
        time: "2:24 PM",
        image: assets.person01,
        story: assets.story01
    },
    {
        id: '2',
        name: 'John Marston',
        message: 'What are you doing',
        time: "2:24 PM",
        image: assets.person02,
        story: assets.story02
    },
    {
        id: '3',
        name: 'Putri Intan',
        message: 'Help me with this assigments',
        time: "2:24 PM",
        image: assets.person03,
        story: assets.story03
    },
    {
        id: '4',
        name: 'Siti Nurhaliza',
        message: 'yooooo',
        time: "2:24 PM",
        image: assets.person04,
        story: assets.story04
    },
    {
        id: '5',
        name: 'Putri Intan',
        message: 'Bye bye',
        time: "2:24 PM",
        image: assets.person03,
        story: assets.story05
    },
    {
        id: '6',
        name: 'Siti Nurhaliza',
        message: 'HiiiI!',
        time: "2:24 PM",
        image: assets.person04,
        story: assets.story06,
    },
    {
        id: '7',
        name: 'Putri Intan',
        message: 'You sent a voice message.',
        time: "2:24 PM",
        image: assets.person03,
        story: assets.story03
    },
    {
        id: '8',
        name: 'Siti Nurhaliza',
        message: 'Thank you',
        time: "2:24 PM",
        image: assets.person04,
        story: assets.story02
    },
    {
        id: '9',
        name: 'Putri Intan',
        message: 'Putri Intan reacted to your message',
        time: "2:24 PM",
        image: assets.person03,
        story: assets.story01,
    },
    {
        id: '10',
        name: 'Siti Nurhaliza',
        message: 'Hello Jack',
        time: "2:24 PM",
        image: assets.person04,
        story: assets.story06
    }
]

export {chatData}

const CreateCall = () => {
    return (
        
    <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <View style={{
            borderRadius: 100,
            backgroundColor: COLORS.gray,
            padding: SIZES.s,
            marginRight: SIZES.m,
        }}>
            <MaterialIcons name="video-call" size={30} color="black" />
            
        </View>
        <Text style={{fontSize: SIZES.xs, marginRight: SIZES.m}}>Create Call</Text>
    </View>
    )
}