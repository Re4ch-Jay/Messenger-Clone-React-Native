import { MaterialIcons } from '@expo/vector-icons'; 
import { COLORS, SIZES, FONTS } from "./theme";
import { Ionicons } from '@expo/vector-icons';
const settingComp = [
    {
        id: '1',
        color: 'purple',
        startIcon: <MaterialIcons name="menu" size={24} color={COLORS.light} />,
        title: "Manage accounts",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '2',
        color: '#333',
        startIcon: <Ionicons name="moon-sharp" size={24} color={COLORS.light} />,
        title: "Dark Mode",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '3',
        color: 'lightgreen',
        startIcon: <MaterialIcons name="circle" size={24} color={COLORS.light} />,
        title: "Active Status",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '4',
        color: 'lightgreen',
        startIcon: <MaterialIcons name="call" size={24} color={COLORS.light} />,
        title: "Mobile Number",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '5',
        color: COLORS.primary,
        startIcon: <MaterialIcons name="lock" size={24} color={COLORS.light} />,
        title: "Privacy",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '6',
        color: 'purple',
        startIcon: <MaterialIcons name="notifications" size={24} color={COLORS.light} />,
        title: "Notifications & sounds",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '7',
        color: 'purple',
        startIcon: <MaterialIcons name="phone" size={24} color={COLORS.light} />,
        title: "Phone Contacts",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '8',
        color: 'purple',
        startIcon: <MaterialIcons name="image" size={24} color={COLORS.light} />,
        title: "Story",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '9',
        color: 'purple',
        startIcon: <MaterialIcons name="image" size={24} color={COLORS.light} />,
        title: "Avatar",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '10',
        color: 'purple',
        startIcon: <MaterialIcons name="shop" size={24} color={COLORS.light} />,
        title: "Orders",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '11',
        color: 'coral',
        startIcon: <MaterialIcons name="photo" size={24} color={COLORS.light} />,
        title: "Photos & media",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '12',
        color: '#333',
        startIcon: <MaterialIcons name="account-circle" size={24} color={COLORS.light} />,
        title: "Switch Account",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '13',
        color: '#333',
        startIcon: <MaterialIcons name="settings" size={24} color={COLORS.light} />,
        title: "Account Settings",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },
    {
        id: '14',
        color: COLORS.primary,
        startIcon: <MaterialIcons name="rule" size={24} color={COLORS.light} />,
        title: "Legal & policies",
        endIcon: <MaterialIcons name='next' size={24} color={COLORS.primary} />
    },

]

export {settingComp}