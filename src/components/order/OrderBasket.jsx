import React from 'react';
import styled from 'styled-components';
import { alertOrderModal } from '../../modules/modal';
import { useDispatch } from 'react-redux';

const BasketWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  padding: 0px 20px 0px 20px;
`;

const BasketTitle = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const BasketOrderList = styled.div`
  height: 40%;
  overflow: auto;
`;

const BasketOrder = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  font-size: 20px;

  button {
    outline: 0;
    border: none;
    width: 2rem;
    height: 100%;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
      background-color: gray;
    }
  }
`;

const BasketPrice = styled.div`
  margin-top: 20px;
  height: 50%;
  .price {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }
`;

const PriceBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 4px;
  width: 230px;
  height: 34px;
  margin: 150px 0px 15px 15px;
  background-color: #03154e;
  outline: 0;
  color: #fff;
`;

const OrderBasket = ({ cartItems, onAdd, onRemove }) => {
  const dispatch = useDispatch();

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;

  const payHandler = () => {
    dispatch(alertOrderModal());
  };
  return (
    <>
      <BasketWrapper>
        <BasketTitle>결제 목록</BasketTitle>
        <BasketOrderList>
          <BasketOrder>
            <div>
              {cartItems.length === 0 && (
                <div>결제 대기중인 내역이 없습니다.</div>
              )}
            </div>
          </BasketOrder>

          {cartItems.map((item) => (
            <BasketOrder key={item.id}>
              <div>{item.name}</div>
              <div>
                <button onClick={() => onAdd(item)}>+</button>
                {item.qty}
                <button onClick={() => onRemove(item)}>-</button>
              </div>
              <div>{item.price} 원</div>
            </BasketOrder>
          ))}
        </BasketOrderList>
        <BasketPrice>
          {cartItems.length !== 0 && (
            <>
              <div className="price">
                <div>상품 가격</div>
                <div>{itemsPrice} 원</div>
              </div>
              <div className="price">
                <div>부과세</div>
                <div>{taxPrice.toFixed(0)} 원</div>
              </div>
              <div className="price">
                <div>총 합계</div>
                <div>
                  <strong>{totalPrice.toFixed(0)} 원</strong>
                </div>
              </div>
            </>
          )}
          <PriceBtn onClick={payHandler}>결제하기</PriceBtn>
        </BasketPrice>
      </BasketWrapper>
    </>
  );
};

export default OrderBasket;