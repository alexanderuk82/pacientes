function MessageError({message}) {
  return (
    <div>
      <p className="w-full bg-red-600 p-4 uppercase font-bold text-white">
        {message}
      </p>
    </div>
  );
}

export default MessageError;
