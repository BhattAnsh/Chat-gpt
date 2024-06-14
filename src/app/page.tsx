// app/page.tsx
import {Button} from '@nextui-org/button'; 
import NavBar from './Components/navbar';
import { LandingPage } from './Components/landingPage';
export default function Page() {
  return (
    <>
      <div>
        <LandingPage></LandingPage>
      </div>
    </>
  )
}