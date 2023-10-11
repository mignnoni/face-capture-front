import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { CallbackImage, FaceCallback } from "@innovatrics/dot-face-auto-capture";
import { useCallback, useState } from "react";
import FaceAutoCapture from "../components/FaceAutoCapture";

export function Home() {

    const [photoUrl, setPhotoUrl] = useState<string>();

    const handlePhotoTaken = <T,>(
        imageData: CallbackImage<T>,
        content?: Uint8Array,
    ) => {
        const imageUrl = URL.createObjectURL(imageData.image);
        setPhotoUrl(imageUrl);
    };

    const handleFaceCapturePhotoTaken: FaceCallback = (imageData, content) => {
        handlePhotoTaken(imageData, content);
    };

    const handleError = useCallback((error: Error) => {
        alert(error);
    }, []);

    const handleBackClick = () => {
        setPhotoUrl(undefined);
      };

    return (
        <Flex w='full' flexDir={'column'} justify={'center'} align={'center'}>
                <FaceAutoCapture
                    onPhotoTaken={handleFaceCapturePhotoTaken}
                    onError={handleError}
                    onBackClick={handleBackClick}
                />
            {photoUrl && <Image src={photoUrl} />}
        </Flex>
    );
}