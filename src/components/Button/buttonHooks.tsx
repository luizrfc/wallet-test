const { Colors } = require("../../styles/themeStyle");

interface IButtonHooks {
    fontColor: (disable: boolean, type: string) => string
}

const useButton = (): IButtonHooks => {
    const fontColor = (disabled: boolean, type: string): string => {
        if (disabled) return Colors.grey;
        switch (type) {
            case "primary":
                return Colors.blueDark;
            case "secondary":
                return Colors.white;
            case "disabled":
                return Colors.grey;
            case "icon":
                return Colors.secondary;
            case "rounded":
                return Colors.white;
            default:
                return Colors.primary;
        }
    };

    return {
        fontColor
    }
}

export default useButton;