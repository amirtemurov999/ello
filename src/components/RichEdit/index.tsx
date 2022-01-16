import { useCallback, useRef, useState } from "react";
import { Dropdown } from "../Dropdown";
import { RichButton } from "./components/Button";
import { useStyles } from "./hooks/useStyles";
interface IRichProps {}

export const RichEdit: React.FC<IRichProps> = ({}) => {
  const styles = useStyles();
  const editor = useRef<HTMLDivElement>(null);
  const colors = useRef<{ [key: string]: string }>({
    Red: "red",
    Green: "green",
    Back: "black",
    Blue: "blue",
    White: "white",
    Silver: "silver",
  });
  const [states, setStates] = useState<{ [key: string]: boolean }>({
    bold: false,
    underline: false,
    overline: false,
    backColor: false,
    italic: false,
    strikeThrough: false,
    insertOrderedList: false,
    insertUnorderedList: false,
    code: false,
  });
  const executeCommand = useCallback(
    (command: string, tag: string = "", color = "") => {
      if (tag) {
        if (window.getSelection()?.rangeCount != 0)
          document.execCommand(
            command,
            false,
            `<${tag}>${window.getSelection()}</${tag}>`
          );
      } else if (color) {
        document.execCommand(command, false, color);
      } else {
        document.execCommand(command, false);
        detectStyles();
      }
    },
    []
  );
  const insertHeading = useCallback(() => {}, []);
  const detectStyles = useCallback(() => {
    Object.keys(states).map((key) => {
      states[key] = document.queryCommandState(key);
      setStates(() => {
        return { ...states, key: states[key] };
      });
    });
    editor.current?.focus();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <Dropdown
          items={Object.keys(colors.current)}
          bordered={false}
          icon={{ icon: "TextColor", size: "sm" }}
          renderItem={(text, index) => (
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={() =>
                executeCommand("foreColor", "", colors.current[text])
              }
            >
              <div
                style={{
                  background: colors.current[text],
                  width: 18,
                  height: 18,
                  marginRight: 5,
                  border: `1px solid black`,
                }}
              ></div>
              <span>{text}</span>
            </div>
          )}
        />
        <RichButton
          iconName="DecFont"
          command="decreaseFontSize"
          onClick={(command) => executeCommand(command)}
        />
        <RichButton
          iconName="IncFont"
          command="increaseFontSize"
          onClick={(command) => executeCommand(command)}
        />
        <div className={styles.splitter} />

        <RichButton
          toggle={states["bold"]}
          iconName="Bold"
          command="bold"
          onClick={(command) => executeCommand(command)}
        />
        <RichButton
          iconName="Italic"
          command="italic"
          toggle={states["italic"]}
          onClick={(command) => executeCommand(command)}
        />
        <RichButton
          iconName="Underline"
          command="underline"
          toggle={states["underline"]}
          onClick={(command) => executeCommand(command)}
        />
        <RichButton
          iconName="Overline"
          command="strikeThrough"
          toggle={states["strikeThrough"]}
          onClick={(command) => executeCommand(command)}
        />
        <div className={styles.splitter} />
        <Dropdown
          items={[
            "Heading 1",
            "Heading 2",
            "Heading 3",
            "Heading 4",
            "Heading 5",
            "Heading 6",
          ]}
          bordered={false}
          icon={{ icon: "Heading", size: "sm" }}
          renderItem={(text, index) => (
            <span onClick={() => executeCommand("insertHTML", `H${index + 1}`)}>
              {text}
            </span>
          )}
        />
        <div className={styles.splitter} />
        <RichButton
          iconName="Ordered"
          command="insertOrderedList"
          toggle={states["insertOrderedList"]}
          onClick={(command) => executeCommand(command)}
        />
        <RichButton
          iconName="Unordered"
          command="insertUnorderedList"
          toggle={states["insertUnorderedList"]}
          onClick={(command) => executeCommand(command)}
        />
        <RichButton iconName="Quote" />
        <div className={styles.splitter} />
        <RichButton
          iconName="Code"
          command="insertHTML"
          onClick={(command) => executeCommand(command, "code")}
        />
        <Dropdown
          items={Object.keys(colors.current)}
          bordered={false}
          icon={{ icon: "Marker", size: "sm" }}
          renderItem={(text, index) => (
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={() =>
                executeCommand("backColor", "", colors.current[text])
              }
            >
              <div
                style={{
                  background: colors.current[text],
                  width: 18,
                  height: 18,
                  marginRight: 5,
                  border: `1px solid black`,
                }}
              ></div>
              <span>{text}</span>
            </div>
          )}
        />
        <RichButton iconName="Link2" />
        <RichButton iconName="Unlink" />
        <RichButton iconName="FullScreen" />
      </div>
      <div
        onClick={() => detectStyles()}
        contentEditable="true"
        ref={editor}
        className={styles.editor}
        onKeyUp={(e) => {
          console.log(e.keyCode);
          if ([37, 37, 39, 40].includes(e.keyCode)) {
            detectStyles();
          }
        }}
      >
        asdawdawdawd
      </div>
    </div>
  );
};
