import { View } from "react-native"
import { styleTheme } from "../../styles/themeStyle"

interface ContainerProps {
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps): JSX.Element => {
    return <View style={styleTheme(16).main}>
        {children}
    </View>
}

export default Container;