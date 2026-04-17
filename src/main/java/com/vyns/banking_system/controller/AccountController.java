package com.vyns.banking_system.controller;

import com.vyns.banking_system.dto.AccountCreateDto;
import com.vyns.banking_system.dto.AccountResponseDto;
import com.vyns.banking_system.dto.CheckBalanceResponseDto;
import com.vyns.banking_system.dto.TransactionRequestDto;
import com.vyns.banking_system.services.AccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/accounts")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    // Create Account
    @PostMapping("/createaccount")
    public ResponseEntity<AccountResponseDto> createAccount(@Valid @RequestBody AccountCreateDto dto) {
        return ResponseEntity.ok(accountService.createAccount(dto));
    }

    // Get Account Details by ID
    @GetMapping("/{id}")
    public ResponseEntity<AccountResponseDto> getAccount(@PathVariable Long id) {
        return ResponseEntity.ok(accountService.getAccountById(id));
    }

    // Deposit
    @PutMapping("/{id}/deposit")
    public ResponseEntity<AccountResponseDto> deposit(@PathVariable Long id,
                                                      @Valid @RequestBody TransactionRequestDto request) {
        return ResponseEntity.ok(accountService.deposit(id, request.getAmount()));
    }

    // Withdraw
    @PutMapping("/{id}/withdraw")
    public ResponseEntity<AccountResponseDto> withdraw(@PathVariable Long id,
                                                       @Valid @RequestBody TransactionRequestDto request) {
        return ResponseEntity.ok(accountService.withdraw(id, request.getAmount()));
    }

    @GetMapping("/checkbalance/{id}")
    public ResponseEntity<CheckBalanceResponseDto> checkBalance(@PathVariable  Long id) {
        return ResponseEntity.ok(accountService.Checkbalance(id));
    }
}
