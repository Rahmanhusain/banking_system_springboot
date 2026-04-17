package com.vyns.banking_system.services;

import com.vyns.banking_system.dto.AccountCreateDto;
import com.vyns.banking_system.dto.AccountResponseDto;
import com.vyns.banking_system.dto.CheckBalanceResponseDto;

import java.math.BigDecimal;

public interface AccountService {
    AccountResponseDto createAccount(AccountCreateDto dto);
    AccountResponseDto getAccountById(Long id);
    AccountResponseDto deposit(Long id, BigDecimal amount);
    AccountResponseDto withdraw(Long id, BigDecimal amount);
    CheckBalanceResponseDto Checkbalance(Long id);
}
