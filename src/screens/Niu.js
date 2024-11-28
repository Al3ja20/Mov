import React, { useState, useEffect } from 'react';
import { Center, Box, VStack, Avatar, Text, Divider, Button, HStack, Icon, Badge, ScrollView, Alert, Progress, Skeleton, Spinner,
  useToast, 
  Toast} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useColorMode } from 'native-base';

const Niu = () => {

    const [showAlert, setShowAlert] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    //Simula la carga de datos del perfil de usuario

    const loadUserData = async () => {
      setLoading(true);
      setProgress(20);

      //Simulación de progreso
      setTimeout(() => setProgress(60), 1000);
      setTimeout(() => setProgress(100), 2000);

      setTimeout(() => {
        setUserData({
          name: "Juan Pérez",
          email: "juan.perez@example.com",
          bio: "Desarrollador de software apasionado por React Native y el desarrollo móvil."
        });
        setLoading(false);
        Toast.show({
            title: "Datos cargados",
            description: "Los datos del perfil han sido cargados correctamente.",
            status: "success",
            duration: 3000,
            isClosable: true
        })
      }, 5000);
    };

    loadUserData();
  }, []);

  return(
    <Center flex={1} px={4}>
      <VStack space={4} w="100%">
        
        {showAlert && (
            <Alert w="100%" status="error" colorScheme="error"
            onClose={() => setShowAlert(false)}>
                <Alert.Icon/>
                <text color="error.700">Hubo un error al cargar los datos</text>
            </Alert>
        )}
        {/* Simulación de carga de datos */}
        {loading ? (
          <>
          <Text>Cargando perfil del usuario...</Text>
          <Progress value={progress} colorScheme="blue" />
          <Skeleton.Text lines={3} mt={4} />
          <Skeleton mt={2} h="20" />
          <Skeleton mt={2} h="20" />
          <Spinner size="lg" color="blue.500" mt={4} />
          </>
        ) : (
          <>
          {/* Información de usuario */}
          <Box p={4} bg="white" rounded="lg" shadow={1}>
            <Text fontSize="xl" fontWeight="bold">{userData.name}</Text>
            <Text color="gray.500">{userData.email}</Text>
            <Text mt={2}>{userData.bio}</Text>
          </Box>
          <Button colosScheme="danger" onPress={() => setShowAlert(true)}>
            Simular error
          </Button>
          </>
        )}
      </VStack>
    </Center>
  );
};
  export default Niu;