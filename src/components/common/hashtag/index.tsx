import { v4 as uuidv4 } from "uuid";

interface IPropsHashtag {
  setHashtag: (arg0: string[]) => void;
  hashtag: string[] | [];
}

export default function Hashtag(props: IPropsHashtag) {
  const onKeyUp = (event: any) => {
    if (event.keyCode === 32 && event.target.value !== "") {
      props.setHashtag([...props.hashtag, `#${event.target.value}`]);
      event.target.value = "";
    }
  };
  const onClickDelete = (index: number) => () => {
    props.hashtag.splice(index, 1);
    props.setHashtag([...props.hashtag]);
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            onKeyUp={onKeyUp}
            placeholder="hashtags"
            style={{
              width: "350px",
              height: "52px",
              margin: "5px",
              padding: "15px",
              borderRadius: "16px",
            }}
          />
          <div>
            {props.hashtag.map((el, index) => (
              <div key={uuidv4()} onClick={onClickDelete(index)}>
                {el}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
