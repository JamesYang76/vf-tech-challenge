import { Typography, Dropdown, Button } from 'antd';
import { LeftOutlined, DoubleLeftOutlined, RightOutlined, EllipsisOutlined, DoubleRightOutlined, StopOutlined } from '@ant-design/icons';

import type { FC } from 'react';
import classNames from 'classnames';

import classes from "./EmailMessageHeaderExpanded.module.css";

import { Contact, Message } from './EmailModel';
import { datTimeFormatEmail } from '../../lib/dateTimeFormat';

const { Title } = Typography;


interface Props {
  message: Message;
  onReply: (message: Message) => void;
  onReplyAll: (message: Message) => void;
  onForward: (message: Message) => void;
  onDiscard: (message: Message) => void;
  onEscalate: (message: Message) => void;
};


const EmailMessageHeaderExpanded: FC<Props> = ({ message, onReply, onReplyAll, onForward, onEscalate, onDiscard }) => {
  
  const formatContact = (contact: Contact) : string => {
    if (!contact.name) { return contact.email; }

    return `${contact.name} (${contact.email})`;   
  }
    
  const handleReply = () => {
    onReply(message);
  };
    
  const handleMenuClick = (event: { key: string }) => {
     menuActions[event.key](message); 
  };

  const menuActions: { [key: string]: (message: Message) => void } = {
    '1': onReplyAll,
    '2': onForward,
    '3': onEscalate,
    '4': onDiscard,
  };

  const items = [
    {
      label: 'Reply All',
      key: '1',
      icon: <DoubleLeftOutlined />,
    },
    {
      label: 'Forward',
      key: '2',
      icon: <RightOutlined />
    },
    {
      label: 'Escalate',
      key: '3',
      icon: <DoubleRightOutlined />
    },
    {
      label: 'Discard',
      key: '4',
      icon: <StopOutlined />
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  
  return (
    <section className={classes.header}>
      <div className={classes.headerInfo}>
        <div>
          <Title level={5}>
            { formatContact(message.from) }
          </Title>
          <div className={classNames(classes.marginBottom, classes.subInfo)}>
            { datTimeFormatEmail(new Date(message.dateTimeCreated)) }
          </div>
        </div>
        <div
          className={classes.marginBottom} 
          onClick = {(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
        >
          
          <Button 
            icon={<LeftOutlined />} 
            className={classes.dropdownBtn} 
            onClick={handleReply}  
          >
            Reply
          </Button>

          <Dropdown
            menu={menuProps}
            overlayClassName={classes.dropdownMenu}
          >
            <Button className={classes.dropdownBtn} icon={<EllipsisOutlined />} />
          </Dropdown>
        </div>
      </div>
      <div className={classNames(classes.marginBottom, classes.subInfo)}>
        <strong>To</strong> { message.to.map(formatContact).join("; ") }
      </div>
      { 
        message.cc.length > 0 && 
        <div className={classNames(classes.marginBottom, classes.subInfo)}>
          <strong>CC</strong> { message.cc.map(formatContact).join("; ") }
        </div> 
      }
    </section>
  )
};


export default EmailMessageHeaderExpanded;
