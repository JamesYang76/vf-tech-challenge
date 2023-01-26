import { useState } from 'react';
import { Collapse } from 'antd';
import type { FC } from 'react';

import classes from "./EmailMessageCard.module.css";
import { Message } from './EmailModel';

import EmailMessageHeader from './EmailMessageHeader';
import EmailMessageHeaderExpanded from './EmailMessageHeaderExpanded';

const { Panel } = Collapse;

interface Props {
  message: Message;
  defaultExpanded: boolean,
  onReply: (message: Message) => void;
  onReplyAll: (message: Message) => void;
  onForward: (message: Message) => void;
  onDiscard: (message: Message) => void;
  onEscalate: (message: Message) => void;
};

const EmailMessageCard: FC<Props> = ({ message, defaultExpanded, onReply, onReplyAll, onForward, onDiscard, onEscalate }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Collapse
      bordered
      activeKey={expanded ? "1" : undefined}
      onChange={toggleExpanded}
      className={classes.card}
    >
      <Panel 
        showArrow={false}
        header={
          expanded === true ? 
          <EmailMessageHeaderExpanded
            message = { message }
            onReply={onReply}
            onReplyAll={onReplyAll}
            onForward={onForward}
            onDiscard={onDiscard}
            onEscalate={onEscalate}
          />
          :
          <EmailMessageHeader
            message = { message }
          />
        }
        key="1"
      >
        <div
          className={classes.body}
          dangerouslySetInnerHTML={{ __html: message.content }} 
        />
      </Panel>
    </Collapse>
    
  )
};

export default EmailMessageCard;
