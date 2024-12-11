import { LinearGradient } from 'expo-linear-gradient';

export default function LinearBackground({ children }) {
    return (
        <LinearGradient
            
            style={{ flex: 1 }}
        >
            {children}
        </LinearGradient>
    );
}