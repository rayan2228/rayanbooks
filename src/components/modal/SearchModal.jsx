import SearchWrapper from "../search/SearchWrapper";
import ModalWrapper from "./ModalWrapper";

const SearchModal = ({ onclose }) => {
  return (
    <ModalWrapper onClose={onclose}>
      <SearchWrapper />
    </ModalWrapper>
  );
};

export default SearchModal;
