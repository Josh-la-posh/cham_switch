import {View, Text, StyleSheet} from 'react-native';

const CompanySetupLayout = ({title, children}) => {
  return (
    <View style={{marginTop: '12%'}}>
        <Text style={styles.title}>{title}</Text>
        <View>{children}</View>
    </View>
  )
}

export default CompanySetupLayout

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        marginBottom: 57,
        fontSize: 25,
        fontWeight: 700,
    }
})