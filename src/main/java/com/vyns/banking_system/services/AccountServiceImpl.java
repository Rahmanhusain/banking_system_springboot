package com.vyns.banking_system.services;

import com.vyns.banking_system.dto.AccountCreateDto;
import com.vyns.banking_system.dto.AccountResponseDto;
import com.vyns.banking_system.dto.CheckBalanceResponseDto;
import com.vyns.banking_system.entity.Account;
import com.vyns.banking_system.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;

    @Override
    @Transactional
    public AccountResponseDto createAccount(AccountCreateDto dto) {
        Account account = new Account();
        account.setAccountHolderName(dto.getAccountHolderName());
        account.setBalance(BigDecimal.ZERO);

        account = accountRepository.save(account);
        return mapToDto(account);
    }

    @Override
    public AccountResponseDto getAccountById(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found with id: " + id));
        return mapToDto(account);
    }

    @Override
    @Transactional
    public AccountResponseDto deposit(Long id, BigDecimal amount) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        account.setBalance(account.getBalance().add(amount));
        account = accountRepository.save(account);
        return mapToDto(account);
    }

    @Override
    @Transactional
    public AccountResponseDto withdraw(Long id, BigDecimal amount) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        if (account.getBalance().compareTo(amount) < 0) {
            throw new RuntimeException("Insufficient balance");
        }

        account.setBalance(account.getBalance().subtract(amount));
        account = accountRepository.save(account);
        return mapToDto(account);
    }

    @Override
    public CheckBalanceResponseDto Checkbalance(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Account not found with id: " + id));
        return mapToCheckBalanceDto(account);
    }
    private AccountResponseDto mapToDto(Account account) {
        AccountResponseDto dto = new AccountResponseDto();
        dto.setId(account.getId());
        dto.setAccountHolderName(account.getAccountHolderName());
        dto.setBalance(account.getBalance());
        return dto;
    }
    private CheckBalanceResponseDto mapToCheckBalanceDto(Account account) {
        CheckBalanceResponseDto dto = new CheckBalanceResponseDto();
        dto.setBalance(account.getBalance());
        return dto;
    }
}