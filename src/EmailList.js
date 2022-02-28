
import { IconButton, Checkbox } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow'
import { db } from './firebase'
import Section from './Section'

function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
            setEmails(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
                }))
            )
        }
        );
        console.log("emails", emails);
    }, []);
    

  return (
    <div className='emailList'>
        <div className='emailList_settings'>
            <div className='emailList_settingsLeft'>
                <Checkbox />
                <IconButton>
                    <ArrowDropDown />
                </IconButton>
                <IconButton>
                    <Redo />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>

            <div className='emailList_settings_right'>
                <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight />
                </IconButton>
                <IconButton>
                    <KeyboardHide />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>

        <div className='emailList_sections'>
            <Section Icon={Inbox} title="primary" color="red" selected />
            <Section Icon={People} title="Social" color="#1A73E8" />
            <Section Icon={LocalOffer} title="Promotions" color="green" />
        </div>

        <div className='emailList_list'>
            {emails.map(({ id, data: {to, subject, message, timestamp} }) => (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />

            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />

            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />

            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />

            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />

            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />

            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />

            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Hey fellow"
                description="This is a test"
                time="10pm"
            />
        </div>
    </div>
  )
}

export default EmailList