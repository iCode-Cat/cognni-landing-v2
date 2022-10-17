import axios from 'axios';

interface monitorState {
  eventId: string;
  data: any;
}

const useSendEvent = () => {
  //   const { state } = useStateTool();
  //   const partnerIdState = state?.template?.data[0]?.partnerId;

  // Connect to monitoring service
  const monitoringService = async ({
    eventId = 'test',
    data = {},
  }: monitorState) => {
    try {
      await axios.post(
        'https://stage-webapi.cognni.ai/analytic/events/landingpage',
        {
          data: { ...data },
          eventId,
          //   partnerId: partnerIdState,
          deviceId: 'uuid',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic NWM4MDE2NTItZjZhOS00NjdlLTk5NjgtNmZmNjUxMWRlYWEyOiYxPGhiXVZCYHZVTypgRHo8bXQrWWsrJjc5VGxZWWQwJD0qb0JmaUktZXpXUFRbNEAxaG5oR2RfJ1VeIUtOWg==`,
            Origin: 'https://stage-webapi.cognni.ai',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return { monitoringService };
};

export default useSendEvent;
