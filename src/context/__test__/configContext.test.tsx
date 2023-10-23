import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { ConfigProvider } from '../configContext';
import { Button } from 'react-native';

describe('ConfigProvider', () => {
  const toggleLoading: jest.Mock = jest.fn();
  const mockConfigContext: jest.SpyInstance = jest.spyOn(React, 'useContext');

  beforeEach(() => {
    mockConfigContext.mockReturnValue({
      Loading: false,
      toggleLoading
    });
  });

  const MockContent = () => {
    return <>
      <Button testID='btn-test-id' onPress={() => toggleLoading(false)} title='Button' />
    </>
  }

  it('should render children without crashing', () => {
    render(
      <ConfigProvider>
        <MockContent />
      </ConfigProvider>
    );
  });

  it('should provide the correct context values', () => {
    render(<MockContent />);
    fireEvent.press(screen.getByTestId('btn-test-id'));
    expect(toggleLoading).toBeCalledWith(false)
  });

});