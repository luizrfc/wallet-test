import { View } from "react-native"
import { styleTheme } from "../../styles/themeStyle"

interface ContainerProps {
    children: React.ReactNode;
    ph?: number; // PaddingHorizontal
}

const Container = ({ children, ph = 16 }: ContainerProps): JSX.Element => {
    return <View style={styleTheme(ph).main}>
        {children}
    </View>
}

export default Container;