import { NextPage } from "next";
import Header from "../../../components/layout/header";
import CData from '../sanse.json';
const Detail: NextPage = () => {
    return(
        <div>
            <Header/>
            <div>
                <div>
                    <div>
                        <span>{CData.title}</span>
                        <span>
                            <span>{CData.user.name}</span>
                            <span>{CData.user.birthday}</span>
                        </span>
                    </div>
                    <div>
                        <span>{CData.content}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}