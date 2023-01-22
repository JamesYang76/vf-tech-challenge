import type { FC } from 'react';
import { Typography } from 'antd';
import { Message, Contact } from './EmailModel';
import classNames from 'classnames';

import classes from "./EmailMessageHeader.module.css";
import { datTimeFormatEmail } from '../../lib/dateTimeFormat';

const { Title } = Typography;

interface Props {
  message: Message;
};


const EmailMessageHeader: FC<Props> = ({ message }) => {

  const formatContact = (contact: Contact ) : string => {
    if (!contact.name) { return contact.email; }

    return contact.name;   
  };

  return (
    <section className={classes.header}> 
      <div className={classes.collpasedHeader}>
        <div className={classes.hearderItem}>
          <Title level={5}>
           { formatContact(message.from) }
          </Title>
          <div className={classes.preview}>
           { message.contentPreview }
          </div>
        </div>
        <div className={classNames(classes.dateTime)}>
          { datTimeFormatEmail(new Date(message.dateTimeCreated)) }
        </div>
      </div>  
    </section>  
  )
};

export default EmailMessageHeader;
