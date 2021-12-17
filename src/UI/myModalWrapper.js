import styled from "styled-components";

const ModalWrapper = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;

    &.active {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .modalContent {
    min-width: 300px;
    width: 450px;
    background: #fff;
    padding: 25px;
  }
`;
export default ModalWrapper;
