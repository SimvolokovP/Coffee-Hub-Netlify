const useTg = () => {
  const tg = window.Telegram.WebApp;

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
};
export default useTg;
