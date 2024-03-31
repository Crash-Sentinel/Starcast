import { View, Text, Pressable, useWindowDimensions } from 'react-native';
import { styles } from '../components/styles';

export default function ResultScreen({ route, navigation }) {
    const { url } = route.params;
    const { height, width } = useWindowDimensions();

    const handlePress = () => {
        navigation.goBack();
    }

    return (
        <View>
            <Pressable
                style={styles.pressable}
                onPress={handlePress}
            >
                <Text
                    style={styles.textCenterAlign}
                >  Go Back  </Text>
            </Pressable>
            <iframe
                src={url}
                width={width}
                height={height}
            >
            </iframe>
        </View>
    )
}