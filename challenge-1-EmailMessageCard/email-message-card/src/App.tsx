import type { FC } from 'react';
import 'antd/dist/reset.css';
import './App.css';

import EmailMessageCard  from './components/emails/EmailMessageCard';

const App: FC = () => (
  <>
    <EmailMessageCard
      message={{
        id: "1234",
        dateTimeCreated: 1560120300000,
        from: { name: "Sianna Hallas", email: "shallas@gmail.com" },
        to: [
          { name: "Support", email: "support@company.com" },
          { name: "FirstName LastName", email: "name@gmail.com" },
        ],
        cc: [],
        contentPreview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Thanks,<br />Sianna</p>",
      }}
      defaultExpanded={true}
      onReply={(message) => console.log("onReply", message)}
      onReplyAll={(message) => console.log("onReplyAll", message)}
      onForward={(message) => console.log("onForward", message)}
      onDiscard={(message) => console.log("onDiscard", message)}
      onEscalate={(message) => console.log("onEscalate", message)}
    />
    <EmailMessageCard
      message={{
        id: "1235",
        dateTimeCreated: 1560120300000,
        from: { name: "Support", email: "support@company.com" },
        to: [{ name: "Sianna Hallas", email: "shallas@gmail.com" }],
        cc: [],
        contentPreview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
      }}
      defaultExpanded={false}
      onReply={(message) => console.log("onReply", message)}
      onReplyAll={(message) => console.log("onReplyAll", message)}
      onForward={(message) => console.log("onForward", message)}
      onDiscard={(message) => console.log("onDiscard", message)}
      onEscalate={(message) => console.log("onEscalate", message)}
    />
    <EmailMessageCard
      message={{
        id: "1236",
        dateTimeCreated: 1560120300000,
        from: { name: "Support", email: "support@company.com" },
        to: [{ name: "", email: "shallas@gmail.com" }],
        cc: [{ name: "Sianna Hallas", email: "shallas@gmail.com" }],
        contentPreview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>",
      }}
      defaultExpanded={true}
      onReply={(message) => console.log("onReply", message)}
      onReplyAll={(message) => console.log("onReplyAll", message)}
      onForward={(message) => console.log("onForward", message)}
      onDiscard={(message) => console.log("onDiscard", message)}
      onEscalate={(message) => console.log("onEscalate", message)}
    />
  </>
);
export default App;
