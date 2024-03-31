import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Text, Pressable, useWindowDimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './../components/styles';
import * as WebBrowser from 'expo-web-browser';
import Checkbox from 'expo-checkbox';

export default function HomeScreen({ navigation }) {
    const { height, width } = useWindowDimensions();
    const defStarcastURL = 'https://starcast3.vercel.app/';

    const approvedLinks = [
        {"iMusicSchool.com": "https://www.imusic-school.com/en/tools/online-metronome/"},
        {"GuitarApp.com": "https://guitarapp.com/metronome.html?tempo=120&timeSignature=2&pattern=1"},
        {"StudyBass.com": "https://www.studybass.com/tools/online-metronome/"},
        {"Violinspiration.com": "https://violinspiration.com/free-online-metronome/"}
    ];

    const determineKeyAndValue = (index) => {
        var key = Object.keys(approvedLinks[index])[0];
        var value = approvedLinks[index][key];
        return { label: key, value: value };
    };
    
    const [showDetails, setShowDetails] = useState(false);
    const [url, setURL] = useState(String(determineKeyAndValue(0).value));

    const handlePress = () => {
        navigation.navigate('Results', {
            url: url
        });
    };

    const openLink = () => {
        WebBrowser.openBrowserAsync(defStarcastURL);
    };

    /*
    Custom Break Component, meant to serve more functionality than just a <br/> tag
    */
    const Break = ({value}) => {
        return (
            <View style={{height: value}}></View>
        )
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Break value={15}/>
                <View
                    style={{flexDirection: 'row'}}
                >
                    <Checkbox value={showDetails} onValueChange={setShowDetails}/>
                    <Text> Show Info for Starcast </Text>
                </View>
                {showDetails && (
                    <View
                        style={{
                            width: (width*0.8),
                        }}
                    >
                        <Text
                            style={styles.textCenterAlign}
                        > 
                            {`Created by Ben Miller \n For Mr. Lockstead \n Completed: March 31st 2024`}


                        </Text>
                    </View>
                )}
                <Break value={15}/>
                <Text
                    style={styles.bold}
                >Website to Load Metronome From:</Text>
                <Picker
                    selectedValue={url}
                    onValueChange={(itemValue, itemIndex) => setURL(itemValue)}
                >
                    {approvedLinks.map((link, index) => (
                        <Picker.Item 
                            key={index}
                            label={Object.keys(link)[0]} 
                            value={Object.values(link)[0]}
                        />
                    ))}
                </Picker>
                
                <Break value={15}/>
                <Text>Original Starcast:</Text>
                <Pressable
                    style={styles.pressable}
                    onPress={
                        () => openLink()
                    }
                >
                    <Text>  Show Original Starcast on different Web Page  </Text>
                </Pressable>
                <View style={{height: 40}}></View>
                <Pressable style={styles.pressable} onPress={handlePress}>
                    <Text>  Load Metronome  </Text>
                </Pressable>
                <Break value={height}/>
            </View>

            </ScrollView>

    )
}
