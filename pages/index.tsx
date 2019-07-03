import Link from "next/link";

const BoardLink = (props: any) => (
  <li>
    <Link
      as={`/Articles/${props.title}`}
      href={`/Articles?title=${props.title}`}
    >
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <div>
    <h2>게시판 리스트</h2>
    <ul>
      <BoardLink title="as1" />
      <BoardLink title="as2" />
      <BoardLink title="as3" />
    </ul>
  </div>
);
