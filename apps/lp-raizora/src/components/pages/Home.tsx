import ControlBar from '@/components/ControlBar';
import Desktop from '@/components/Desktop';
import Inbox from '@/components/Inbox';
import Notifications from '@/components/Notifications';
import TaskBar from '@/components/TaskBar';
import TitleBar from '@/components/TitleBar';
import { WavyBackground } from '@/components/WavyBackground';
import Windows from '@/components/Windows';

export default function Home() {
    return (
        <div className='bg-background h-screen w-screen'>
            <div className='bg-wallpaper flex h-full w-full flex-col'>
                <TitleBar />
                <Desktop />
                <Windows />
                <Notifications />
                <Inbox />
                <TaskBar />
                <ControlBar />
            </div>
        </div>
    );
}
