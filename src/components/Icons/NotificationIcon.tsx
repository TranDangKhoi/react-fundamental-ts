const NotificationIcon = (props: JSX.IntrinsicElements["svg"]) => {
  return (
    <svg
      width={18}
      height={21}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2364 15.085H4.2363V8.58476C4.2363 6.08467 6.23631 4.08459 8.73633 4.08459C11.2364 4.08459 13.2364 6.08467 13.2364 8.58476V15.085ZM15.2383 14.0851V8.58491C15.2383 5.51479 13.0983 2.9447 10.2383 2.26467V1.58465C10.2383 0.756192 9.56671 0.0845947 8.73828 0.0845947C7.90985 0.0845947 7.23828 0.756192 7.23828 1.58465V2.26467C4.36828 2.9447 2.23828 5.51479 2.23828 8.58491V14.0851L0.238281 16.0852V17.0852H17.2383V16.0852L15.2383 14.0851ZM8.73822 20.0847C9.84278 20.0847 10.7382 19.1892 10.7382 18.0846H6.73824C6.73824 19.1892 7.63366 20.0847 8.73822 20.0847Z"
        fill="#777E91"
      />
    </svg>
  );
};

export default NotificationIcon;
