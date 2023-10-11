import type {
    FaceCallback,
    FaceComponentData,
} from "@innovatrics/dot-face-auto-capture";
import {
    dispatchControlEvent,
    FaceCustomEvent,
    ControlEventInstruction,
} from "@innovatrics/dot-face-auto-capture/events";
import { useState } from "react";
import FaceCamera from "./FaceCamera";
import FaceUi from "./FaceUi";
import { Box, Button, HStack, Heading } from "@chakra-ui/react";

interface Props {
    onPhotoTaken: FaceCallback;
    onError: (error: Error) => void;
    onBackClick: () => void;
}

function FaceAutoCapture({ onPhotoTaken, onError, onBackClick }: Props) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handlePhotoTaken: FaceCallback = async (imageData, content) => {
        setIsButtonDisabled(false);
        onPhotoTaken(imageData, content);
    };

    const handleContinueDetection = () => {
        dispatchControlEvent(
            FaceCustomEvent.CONTROL,
            ControlEventInstruction.CONTINUE_DETECTION,
        );

        setIsButtonDisabled(true);
    };
    return (
        <Box>
            <Heading>Face auto capture</Heading>
            <HStack spacing={4}>
                <Button
                    onClick={handleContinueDetection}
                    disabled={isButtonDisabled}
                >
                    Continuar detecção
                </Button>
                <Button onClick={onBackClick}>
                    Voltar
                </Button>
            </HStack>
            <Box mt={4} maxW='270px' position={'relative'} overflow={'hidden'}>
                <FaceCamera
                    cameraFacing="user"
                    onPhotoTaken={handlePhotoTaken}
                    onError={onError}
                    thresholds={{
                    }}
                />
                <FaceUi showCameraButtons instructions={{ face_not_present: 'Posicione seu rosto no círculo' }} />
            </Box>
        </Box>
    );
}

export default FaceAutoCapture;
